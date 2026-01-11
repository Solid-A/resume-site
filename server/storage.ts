import { db } from "./db";
import {
  profile,
  experience,
  education,
  skills,
  certifications,
  languages,
  inquiries,
  type Profile,
  type Experience,
  type Education,
  type Skill,
  type Certification,
  type Language,
  type Inquiry,
  insertInquirySchema,
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  getExperience(): Promise<Experience[]>;
  getEducation(): Promise<Education[]>;
  getSkills(): Promise<Skill[]>;
  getCertifications(): Promise<Certification[]>;
  getLanguages(): Promise<Language[]>;
  createInquiry(inquiry: any): Promise<Inquiry>;

  // Seeding methods
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProfile(): Promise<Profile | undefined> {
    const result = await db.select().from(profile).limit(1);
    return result[0];
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience);
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getCertifications(): Promise<Certification[]> {
    return await db.select().from(certifications);
  }

  async getLanguages(): Promise<Language[]> {
    return await db.select().from(languages);
  }

  async createInquiry(insertInquiry: any): Promise<Inquiry> {
    const result = await db.insert(inquiries).values(insertInquiry).returning();
    return result[0];
  }

  async seedData(): Promise<void> {
    // Check if profile exists, if not seed all data
    const existingProfile = await this.getProfile();
    if (existingProfile) return;

    // Profile
    await db.insert(profile).values({
      fullName: "Ahmed Farouk Ahmed Yousef",
      title: "Furnaces Operator & Technician",
      summary:
        "Experienced and versatile Furnaces Operator with over 18 years of hands-on experience managing melting furnace operations. Skilled in Heating Transfer, Combustion, and critical parameters for optimal melting conditions. Committed to safety, environmental regulations, and quality control. Proven ability to collaborate with cross-functional teams to drive continuous improvement.",
      email: "solid.ahmed85@gmail.com",
      phone: "01000746027",
      location: "Al Qalyubia, Egypt",
      // imageUrl: "scr= ./client/public/my-photo.jpg",
      socialLinks: { linkedin: "LinkedIn profile" },
    });

    // Experience
    await db.insert(experience).values([
      {
        title: "Furnaces Technician",
        company: "Arkan for Manufacturing and Mining",
        location: "10th of Ramadan, Egypt",
        startDate: "Oct 2023",
        endDate: "Present",
        description: [
          "Improving furnace efficiency through process analysis and combustion adjustment.",
          "Enhancing final product quality through precise combustion monitoring and operational adjustments.",
          "Developed quality control measures that improved product consistency.",
          "Conducted preventive maintenance to improve furnace longevity and efficiency.",
        ],
      },
      {
        title: "Furnaces Technician",
        company: "Younexa Corporation",
        location: "Suez, Egypt",
        startDate: "Jan 2020",
        endDate: "Apr 2022",
        description: [
          "Monitored and controlled furnace processes, ensuring temperature precision.",
          "Diagnosed and resolved equipment malfunctions, minimizing downtime.",
          "Implemented corrective actions as necessary to address quality issues and enhance process performance.",
        ],
      },
      {
        title: "Kiln Technician",
        company: "Ferro Corporation",
        location: "Suez, Egypt",
        startDate: "Jan 2015",
        endDate: "Dec 2019",
        description: [
          "Operated and monitored smelting furnaces using SCADA systems to track process variables.",
          "Ensured optimal combustion quality while managing raw material loading and maintaining accurate records.",
          "Implemented Lean Manufacturing and 5S Methodology to drive process improvements and enhance productivity.",
          "Maintained an organized and efficient work environment adhering to strict safety protocols.",
        ],
      },
      {
        title: "Kiln Operator",
        company: "Al Salomi for Frit and Glazes",
        location: "Suez, Egypt",
        startDate: "Jul 2010",
        endDate: "Dec 2014",
        description: [
          "Monitored and controlled smelting furnace operations and combustion quality.",
          "Designed a new combustion control strategy, optimizing fuel efficiency.",
          "Maintained work area organization, observed errors, and followed up on the production process.",
        ],
      },
      {
        title: "Furnaces Operator",
        company: "Arkan for Manufacturing and Mining",
        location: "10th of Ramadan, Egypt",
        startDate: "May 2007",
        endDate: "Jun 2010",
        description: [
          "Monitored and controlled furnace operations ensuring precise combustion, temperature, and pressure management.",
          "Supervised raw material loading and optimized the smelting process to enhance efficiency and quality.",
        ],
      },
    ]);

    // Education
    await db.insert(education).values([
      {
        degree: "Diploma in Electricity of cars",
        school: "Al Mstqbal Industrial Secondary School",
        location: "Suez, Egypt",
        year: "2005-2006",
      },
    ]);

    // Skills
    await db.insert(skills).values([
      {
        category: "Technical Expertise",
        items: [
          "Furnace Operations",
          "Heat Transfer & Combustion",
          "Refractory Materials",
          "Smelting Process Optimization",
          "Preventive Maintenance",
        ],
      },
      {
        category: "Operational Skills",
        items: [
          "SCADA Systems",
          "Quality Control",
          "Process Analysis",
          "Safety Protocols",
          "Standard Operating Procedures (SOPs)",
        ],
      },
      {
        category: "Soft Skills",
        items: [
          "Problem-Solving",
          "Adaptability",
          "Organization",
          "Cross-functional Collaboration",
          "Critical Thinking",
        ],
      },
      {
        category: "Digital Skills",
        items: ["Microsoft Office", "Computer Science"],
      },
    ]);

    // Certifications
    await db
      .insert(certifications)
      .values([
        { name: "Lean Manufacturing & 5S Methodology" },
        { name: "Fire Fighting Training" },
        { name: "Safety Supervision" },
        { name: "First Aid Training" },
      ]);

    // Languages
    await db.insert(languages).values([
      { language: "Arabic", level: "Native" },
      { language: "English", level: "Conversational" },
    ]);
  }
}

export const storage = new DatabaseStorage();
