import { Experience } from '../types';

interface ExperienceWithDates extends Experience {
  startDate: string;
  endDate?: string;
}

export interface ExperienceSummary {
  totalYears: number;
  totalMonths: number;
  formattedText: string;
}

export function calculateProductManagementExperience(experiences: ExperienceWithDates[]): ExperienceSummary {
  // Filter only product management positions
  const pmExperiences = experiences.filter(exp =>
    exp.position.toLowerCase().includes('product manager') ||
    exp.position.toLowerCase().includes('product owner')
  );

  return calculateTotalExperience(pmExperiences);
}

export function calculateTotalExperience(experiences: ExperienceWithDates[]): ExperienceSummary {
  const now = new Date();
  let totalMonths = 0;

  for (const exp of experiences) {
    const startMonth = parseMonth(exp.startDate);
    const endMonth = exp.endDate ? parseMonth(exp.endDate) : {
      year: now.getFullYear(),
      month: now.getMonth() + 1 // Convert 0-11 to 1-12
    };

    const months = (endMonth.year - startMonth.year) * 12 + (endMonth.month - startMonth.month) + 1;
    totalMonths += months;
  }

  const years = Math.floor(totalMonths / 12);
  const monthsRemaining = totalMonths % 12;

  // Round up to nearest year for display
  const displayYears = years + (monthsRemaining > 0 ? 1 : 0);

  return {
    totalYears: displayYears,
    totalMonths: totalMonths,
    formattedText: `${displayYears}+ Years`
  };
}

function parseMonth(dateString: string): { year: number; month: number } {
  // Handle formats like "August 2024", "2024-08", etc.
  const parts = dateString.match(/(\d{4})[-/](\d{1,2})/) ||
                  dateString.match(/(\d{4})[-/](\d{1,2})/);

  if (parts) {
    return {
      year: parseInt(parts[1]),
      month: parseInt(parts[2])
    };
  }

  // Handle formats like "August 2024", "July 2023"
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  for (let i = 0; i < monthNames.length; i++) {
    if (dateString.toLowerCase().includes(monthNames[i].toLowerCase())) {
      const yearMatch = dateString.match(/\d{4}/);
      if (yearMatch) {
        return {
          year: parseInt(yearMatch[0]),
          month: i + 1
        };
      }
    }
  }

  // Default fallback
  return { year: 2024, month: 8 };
}
