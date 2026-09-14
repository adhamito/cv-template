"use client";

import jsPDF from "jspdf";
import { IoMdDownload } from "react-icons/io";
import data from "../../data.json";

const MARGIN = 40;
const PAGE_WIDTH = 595.28; // A4 in pt
const PAGE_HEIGHT = 841.89;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const ACCENT: [number, number, number] = [180, 130, 0]; // gold, printable on white
const DARK: [number, number, number] = [30, 30, 30];
const GRAY: [number, number, number] = [90, 90, 90];

export const DownloadPDFButton = () => {
  const downloadPDF = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    let y = MARGIN;

    const ensureSpace = (needed: number) => {
      if (y + needed > PAGE_HEIGHT - MARGIN) {
        doc.addPage();
        y = MARGIN;
      }
    };

    const sectionTitle = (title: string) => {
      ensureSpace(26);
      y += 14;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(...DARK);
      doc.text(title.toUpperCase(), MARGIN, y);
      doc.setDrawColor(...ACCENT);
      doc.setLineWidth(1.2);
      doc.line(MARGIN, y + 4, PAGE_WIDTH - MARGIN, y + 4);
      y += 16;
    };

    const paragraph = (
      text: string,
      opts?: { size?: number; color?: [number, number, number]; bold?: boolean; lineHeight?: number }
    ) => {
      const size = opts?.size ?? 10;
      const color = opts?.color ?? DARK;
      const lineHeight = opts?.lineHeight ?? size * 1.35;
      doc.setFont("helvetica", opts?.bold ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(...color);
      const lines: string[] = doc.splitTextToSize(text, CONTENT_WIDTH);
      lines.forEach((line) => {
        ensureSpace(lineHeight);
        doc.text(line, MARGIN, y);
        y += lineHeight;
      });
    };

    const bullets = (items: string[]) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...DARK);
      items.forEach((item) => {
        const lines: string[] = doc.splitTextToSize(item, CONTENT_WIDTH - 14);
        lines.forEach((line, idx) => {
          ensureSpace(13);
          doc.text(idx === 0 ? `•  ${line}` : `    ${line}`, MARGIN, y);
          y += 13;
        });
      });
    };

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(...DARK);
    doc.text(data.personalInfo.name, MARGIN, y);
    y += 20;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(...ACCENT);
    doc.text(data.personalInfo.title.full, MARGIN, y);
    y += 16;

    const c = data.personalInfo.contactDetails as {
      phone: string;
      email: string;
      location: string;
      linkedin?: string;
      github?: string;
    };
    const contactParts = [c.phone, c.email, c.location, c.linkedin, c.github].filter(
      Boolean
    ) as string[];
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...GRAY);
    const contactLine = contactParts
      .map((p) => p.replace(/^https?:\/\//, ""))
      .join("   |   ");
    const contactLines: string[] = doc.splitTextToSize(contactLine, CONTENT_WIDTH);
    contactLines.forEach((line) => {
      doc.text(line, MARGIN, y);
      y += 12;
    });

    // Summary
    sectionTitle("Summary");
    paragraph(data.personalInfo.about);

    // Skills
    sectionTitle("Skills");
    const skillsLine = data.skills
      .map((s) => `${s.name} (${s.level})`)
      .join("   •   ");
    paragraph(skillsLine, { size: 9.5 });

    // Experience
    sectionTitle("Work Experience");
    data.experiences.forEach((exp, idx) => {
      ensureSpace(30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(...DARK);
      doc.text(`${exp.title} — ${exp.company}`, MARGIN, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...GRAY);
      const dateText = `${exp.durationStart} - ${exp.durationEnd}`;
      doc.text(dateText, PAGE_WIDTH - MARGIN - doc.getTextWidth(dateText), y);
      y += 12;
      doc.setFontSize(9.5);
      doc.text(exp.location, MARGIN, y);
      y += 12;
      bullets(exp.description);
      if (idx < data.experiences.length - 1) y += 6;
    });

    // Projects (top 5, most relevant/recent)
    sectionTitle("Selected Projects");
    const featuredProjects = [...data.projects].reverse().slice(0, 5);
    featuredProjects.forEach((project) => {
      ensureSpace(24);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...DARK);
      doc.text(project.name, MARGIN, y);
      y += 12;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8.5);
      doc.setTextColor(...GRAY);
      doc.text(project.technologies.join(", "), MARGIN, y);
      y += 12;
      paragraph(project.description, { size: 9.5 });
      y += 4;
    });

    // Education
    sectionTitle("Education");
    [...data.educations].reverse().forEach((edu) => {
      ensureSpace(14);
      const major = edu.major ? ` in ${edu.major}` : "";
      paragraph(`${edu.degree}${major} — ${edu.institution} (${edu.duration})`, {
        size: 9.5,
      });
    });

    // Further education
    if (data.furtherEducation.currentlyLearning.length) {
      sectionTitle("Currently Learning");
      paragraph(data.furtherEducation.currentlyLearning.join(", "), {
        size: 9.5,
      });
    }

    doc.save(
      `${data.personalInfo.name.replace(/\s+/g, "_")}_CV.pdf`
    );
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
