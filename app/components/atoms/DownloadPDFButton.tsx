"use client";

import jsPDF from "jspdf";
import { IoMdDownload } from "react-icons/io";
import data from "../../data.json";

const PAGE_WIDTH = 595.28; // A4 in pt
const PAGE_HEIGHT = 841.89;
const PAGE_MARGIN = 40;
const HEADER_HEIGHT = 84;
const SIDEBAR_WIDTH = 170;
const SIDEBAR_PADDING = 18;
const MAIN_GAP = 26; // padding between sidebar and main column, and main column's right edge

const DARK: [number, number, number] = [30, 30, 30];
const GRAY: [number, number, number] = [90, 90, 90];
const GOLD_LIGHT: [number, number, number] = [150, 105, 0]; // accent on white
const GOLD_DARK: [number, number, number] = [230, 173, 0]; // accent on dark sidebar/header
const SIDEBAR_BG: [number, number, number] = [31, 41, 55];
const WHITE: [number, number, number] = [255, 255, 255];
const MUTED_LIGHT: [number, number, number] = [190, 193, 204];

const LEVEL_DOTS: Record<string, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
  Expert: 4,
};

export const DownloadPDFButton = () => {
  const downloadPDF = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    // Page 1 background: dark sidebar block + full-width header band on top of it.
    doc.setFillColor(...SIDEBAR_BG);
    doc.rect(0, 0, SIDEBAR_WIDTH, PAGE_HEIGHT, "F");
    doc.rect(0, 0, PAGE_WIDTH, HEADER_HEIGHT, "F");

    const fullWidth = PAGE_WIDTH - PAGE_MARGIN * 2;
    const main = {
      x: SIDEBAR_WIDTH + MAIN_GAP,
      width: PAGE_WIDTH - SIDEBAR_WIDTH - MAIN_GAP * 2,
      y: HEADER_HEIGHT + 26,
    };

    const ensureSpace = (needed: number) => {
      if (main.y + needed > PAGE_HEIGHT - PAGE_MARGIN) {
        doc.addPage();
        doc.setFillColor(...GOLD_LIGHT);
        doc.rect(0, 0, PAGE_WIDTH, 4, "F");
        main.x = PAGE_MARGIN;
        main.width = fullWidth;
        main.y = PAGE_MARGIN + 18;
      }
    };

    const sectionTitle = (title: string) => {
      ensureSpace(40);
      main.y += 14;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(...DARK);
      doc.text(title.toUpperCase(), main.x, main.y);
      doc.setDrawColor(...GOLD_LIGHT);
      doc.setLineWidth(1.2);
      doc.line(main.x, main.y + 4, main.x + main.width, main.y + 4);
      main.y += 16;
    };

    const paragraph = (
      text: string,
      opts?: { size?: number; bold?: boolean }
    ) => {
      const size = opts?.size ?? 10;
      const lineHeight = size * 1.35;
      doc.setFont("helvetica", opts?.bold ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(...DARK);
      const lines: string[] = doc.splitTextToSize(text, main.width);
      lines.forEach((line) => {
        ensureSpace(lineHeight);
        doc.text(line, main.x, main.y);
        main.y += lineHeight;
      });
    };

    // Wraps bullet text up front so callers can measure the exact height a
    // block will take before drawing it, keeping whole entries together.
    const measureBullets = (items: string[]) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      const rendered: { text: string; isFirst: boolean }[] = [];
      items.forEach((item) => {
        const lines: string[] = doc.splitTextToSize(item, main.width - 14);
        lines.forEach((line, idx) => rendered.push({ text: line, isFirst: idx === 0 }));
      });
      return { rendered, height: rendered.length * 13 };
    };

    const drawBullets = (rendered: { text: string; isFirst: boolean }[]) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...DARK);
      rendered.forEach(({ text, isFirst }) => {
        ensureSpace(13);
        doc.text(isFirst ? `•  ${text}` : `    ${text}`, main.x, main.y);
        main.y += 13;
      });
    };

    const measureParagraphLines = (text: string, size: number, width = main.width) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(size);
      const lines: string[] = doc.splitTextToSize(text, width);
      return { lines, height: lines.length * size * 1.35 };
    };

    const drawProjectEntry = (project: {
      name: string;
      technologies: string[];
      description: string;
    }) => {
      const indent = 10;
      const { lines, height: descHeight } = measureParagraphLines(
        project.description,
        9.5,
        main.width - indent
      );
      ensureSpace(12 + 12 + descHeight + 4);

      doc.setFillColor(...GOLD_LIGHT);
      doc.rect(main.x, main.y - 7, 5, 5, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...DARK);
      doc.text(project.name, main.x + indent, main.y);
      main.y += 12;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(...GRAY);
      doc.text(project.technologies.join(", "), main.x + indent, main.y);
      main.y += 12;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...DARK);
      lines.forEach((line) => {
        ensureSpace(9.5 * 1.35);
        doc.text(line, main.x + indent, main.y);
        main.y += 9.5 * 1.35;
      });
      main.y += 4;
    };

    // ---------- Header ----------
    doc.setFont("helvetica", "bold");
    doc.setFontSize(21);
    doc.setTextColor(...WHITE);
    doc.text(data.personalInfo.name, 30, 38);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(...GOLD_DARK);
    doc.text(data.personalInfo.title.full, 30, 60);

    // ---------- Sidebar ----------
    const sb = {
      x: SIDEBAR_PADDING,
      width: SIDEBAR_WIDTH - SIDEBAR_PADDING * 2,
      y: HEADER_HEIGHT + 24,
    };

    const sidebarTitle = (title: string) => {
      sb.y += 4;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(...GOLD_DARK);
      doc.text(title.toUpperCase(), sb.x, sb.y);
      doc.setDrawColor(...GOLD_DARK);
      doc.setLineWidth(1);
      doc.line(sb.x, sb.y + 4, sb.x + sb.width, sb.y + 4);
      sb.y += 16;
    };

    const contactItem = (label: string, value: string, url?: string) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(...MUTED_LIGHT);
      doc.text(label.toUpperCase(), sb.x, sb.y);
      sb.y += 10;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.8);
      const lines: string[] = doc.splitTextToSize(value, sb.width);
      lines.forEach((line, idx) => {
        doc.setTextColor(...(url ? GOLD_DARK : WHITE));
        if (url && idx === 0) {
          doc.textWithLink(line, sb.x, sb.y, { url });
        } else {
          doc.text(line, sb.x, sb.y);
        }
        sb.y += 11;
      });
      sb.y += 6;
    };

    const c = data.personalInfo.contactDetails as {
      phone: string;
      email: string;
      location: string;
      linkedin?: string;
      github?: string;
    };

    sidebarTitle("Contact");
    contactItem("Phone", c.phone, `tel:${c.phone.replace(/[^\d+]/g, "")}`);
    contactItem("Email", c.email, `mailto:${c.email}`);
    contactItem("Location", c.location);
    if (c.linkedin) contactItem("LinkedIn", "View Profile", c.linkedin);
    if (c.github) contactItem("GitHub", "View Profile", c.github);

    sidebarTitle("Skills");
    doc.setFont("helvetica", "normal");
    const dotRadius = 2.6;
    const dotGap = 3;
    const dotsAreaWidth = 4 * (dotRadius * 2) + 3 * dotGap;
    data.skills.forEach((skill) => {
      doc.setFontSize(8.8);
      doc.setTextColor(...WHITE);
      doc.text(skill.name, sb.x, sb.y);
      const filled = LEVEL_DOTS[skill.level] ?? 2;
      let dotX = sb.x + sb.width - dotsAreaWidth + dotRadius;
      for (let i = 0; i < 4; i++) {
        if (i < filled) {
          doc.setFillColor(...GOLD_DARK);
          doc.circle(dotX, sb.y - 2.5, dotRadius, "F");
        } else {
          doc.setDrawColor(...MUTED_LIGHT);
          doc.setLineWidth(0.6);
          doc.circle(dotX, sb.y - 2.5, dotRadius, "S");
        }
        dotX += dotRadius * 2 + dotGap;
      }
      sb.y += 14;
    });
    sb.y += 8;

    sidebarTitle("Education");
    [...data.educations].reverse().forEach((edu) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(...WHITE);
      const degreeLines: string[] = doc.splitTextToSize(
        edu.major ? `${edu.degree} in ${edu.major}` : edu.degree,
        sb.width
      );
      degreeLines.forEach((line) => {
        doc.text(line, sb.x, sb.y);
        sb.y += 10;
      });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...MUTED_LIGHT);
      const subLines: string[] = doc.splitTextToSize(
        `${edu.institution}, ${edu.duration}`,
        sb.width
      );
      subLines.forEach((line) => {
        doc.text(line, sb.x, sb.y);
        sb.y += 10;
      });
      sb.y += 7;
    });

    if (data.furtherEducation.currentlyLearning.length) {
      sidebarTitle("Currently Learning");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...MUTED_LIGHT);
      const lines: string[] = doc.splitTextToSize(
        data.furtherEducation.currentlyLearning.join(", "),
        sb.width
      );
      lines.forEach((line) => {
        doc.text(line, sb.x, sb.y);
        sb.y += 11;
      });
    }

    // ---------- Main column ----------
    sectionTitle("Summary");
    paragraph(data.personalInfo.about);

    sectionTitle("Work Experience");
    data.experiences.forEach((exp, idx) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      const titleLine = `${exp.title} — ${exp.company}`;
      const titleLines: string[] = doc.splitTextToSize(titleLine, main.width);
      // Measure the bold title's last line while the bold font is still
      // active — getTextWidth uses whatever font is currently set.
      const lastTitleLineWidth = doc.getTextWidth(titleLines[titleLines.length - 1]);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      const dateText = `${exp.durationStart} - ${exp.durationEnd}`;
      const dateWidth = doc.getTextWidth(dateText);
      // If the title/company text is short enough, the date shares its last
      // line (right-aligned); otherwise the date gets its own line below,
      // so a long company name can never collide with the date text.
      const dateSharesLine = lastTitleLineWidth + 12 + dateWidth <= main.width;

      const { rendered, height: bulletsHeight } = measureBullets(exp.description);
      const spacing = idx < data.experiences.length - 1 ? 6 : 0;
      const headerHeight =
        titleLines.length * 12 + (dateSharesLine ? 0 : 12) + 12;
      ensureSpace(headerHeight + bulletsHeight + spacing);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(...DARK);
      titleLines.forEach((line, i) => {
        doc.text(line, main.x, main.y);
        if (i === titleLines.length - 1 && dateSharesLine) {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          doc.setTextColor(...GRAY);
          doc.text(dateText, main.x + main.width - dateWidth, main.y);
        }
        main.y += 12;
      });
      if (!dateSharesLine) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(...GRAY);
        doc.text(dateText, main.x + main.width - dateWidth, main.y);
        main.y += 12;
      }
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...GRAY);
      doc.text(exp.location, main.x, main.y);
      main.y += 12;
      drawBullets(rendered);
      main.y += spacing;
    });

    sectionTitle("Projects");
    [...data.projects].reverse().forEach(drawProjectEntry);
    data.additionalProjects.forEach(drawProjectEntry);

    // ---------- Footer: page numbers on every page ----------
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...GRAY);
      const footerText = `${data.personalInfo.name}  ·  Page ${i} of ${pageCount}`;
      doc.text(
        footerText,
        PAGE_WIDTH / 2 - doc.getTextWidth(footerText) / 2,
        PAGE_HEIGHT - 18
      );
    }

    const titleCasedName = data.personalInfo.name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("_");
    doc.save(`${titleCasedName}_CV.pdf`);
  };

  return (
    <button
      id="download-button"
      onClick={downloadPDF}
      className="bg-gray-800 text-white"
      title="Download CV as PDF"
    >
      <IoMdDownload size={25} />
    </button>
  );
};

export default DownloadPDFButton;
