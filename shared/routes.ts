import { z } from 'zod';
import { 
  insertProfileSchema, 
  insertExperienceSchema, 
  insertEducationSchema, 
  insertSkillSchema, 
  insertCertificationSchema, 
  insertLanguageSchema,
  insertInquirySchema,
  profile,
  experience,
  education,
  skills,
  certifications,
  languages,
  inquiries
} from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  profile: {
    get: {
      method: 'GET' as const,
      path: '/api/profile',
      responses: {
        200: z.custom<typeof profile.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    }
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience',
      responses: {
        200: z.array(z.custom<typeof experience.$inferSelect>()),
      },
    }
  },
  education: {
    list: {
      method: 'GET' as const,
      path: '/api/education',
      responses: {
        200: z.array(z.custom<typeof education.$inferSelect>()),
      },
    }
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(z.custom<typeof skills.$inferSelect>()),
      },
    }
  },
  certifications: {
    list: {
      method: 'GET' as const,
      path: '/api/certifications',
      responses: {
        200: z.array(z.custom<typeof certifications.$inferSelect>()),
      },
    }
  },
  languages: {
    list: {
      method: 'GET' as const,
      path: '/api/languages',
      responses: {
        200: z.array(z.custom<typeof languages.$inferSelect>()),
      },
    }
  },
  inquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertInquirySchema,
      responses: {
        201: z.custom<typeof inquiries.$inferSelect>(),
        400: errorSchemas.validation,
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
