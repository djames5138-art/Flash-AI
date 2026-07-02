import { pgTable, serial, text, boolean, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const flashcardSetsTable = pgTable("flashcard_sets", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  cards: jsonb("cards").notNull().$type<Array<{ front: string; back: string }>>(),
  tags: text("tags").array().notNull().default([]),
  shareToken: text("share_token").unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertFlashcardSetSchema = createInsertSchema(flashcardSetsTable).omit({ id: true, createdAt: true });
export type InsertFlashcardSet = z.infer<typeof insertFlashcardSetSchema>;
export type FlashcardSet = typeof flashcardSetsTable.$inferSelect;

export const userSettingsTable = pgTable("user_settings", {
  id: serial("id").primaryKey(),
  isPremium: boolean("is_premium").notNull().default(false),
  streak: integer("streak").notNull().default(0),
  daysStudied: integer("days_studied").notNull().default(0),
  lastStudied: timestamp("last_studied"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type UserSettings = typeof userSettingsTable.$inferSelect;
