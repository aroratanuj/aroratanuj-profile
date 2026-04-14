export interface Metric {
  value: string;
  label: string;
}

export const metricsData: Metric[] = [
  { value: '4', label: 'Products Launched' },
  { value: '4', label: 'Companies' },
  { value: '95%', label: 'Customer Satisfaction' },
  { value: '10%', label: 'Churn Reduction' },
  { value: '44%', label: 'Efficiency Gain' }
];
