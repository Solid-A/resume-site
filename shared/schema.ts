import { pgTable, text, serial, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull(),
  imageUrl: text("image_url"),
  socialLinks: jsonb("social_links").$type<{ linkedin?: string; website?: string }>().default({}),
});

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"), // null for present
  description: text("description").array().notNull(), // bullets
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  degree: text("degree").notNull(),
  school: text("school").notNull(),
  location: text("location").notNull(),
  year: text("year").notNull(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // e.g., Technical, Soft Skills, Digital
  items: text("items").array().notNull(),
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const languages = pgTable("languages", {
  id: serial("id").primaryKey(),
  language: text("language").notNull(),
  level: text("level").notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Schemas
export const insertProfileSchema = createInsertSchema(profile).omit({ id: true });
export const insertExperienceSchema = createInsertSchema(experience).omit({ id: true });
export const insertEducationSchema = createInsertSchema(education).omit({ id: true });
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });
export const insertCertificationSchema = createInsertSchema(certifications).omit({ id: true });
export const insertLanguageSchema = createInsertSchema(languages).omit({ id: true });
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });

// Types
export type Profile = typeof profile.$inferSelect;
export type Experience = typeof experience.$inferSelect;
export type Education = typeof education.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type Certification = typeof certifications.$inferSelect;
export type Language = typeof languages.$inferSelect;
export type Inquiry = typeof inquiries.$inferSelect;
