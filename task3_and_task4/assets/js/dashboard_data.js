// Sample data for revenue by job location
const revenueByLocationData = [
  { location: 'Edmonds', revenue: 34045 },
  { location: 'Muketeo', revenue: 46034 },
  { location: 'Bothell', revenue: 47520 },
  { location: 'Lynnwood', revenue: 59204 },
  { location: 'Seattle', revenue: 90045 },
  { location: 'Everett', revenue: 100340 },
];

// Sample data for revenue by job type
const revenueByJobTypeData = [
  { type: 'Material Sale', revenue: 5023 },
  { type: 'Maintenance', revenue: 45001 },
  { type: 'HWT Replacement', revenue: 46043 },
  { type: 'Bid Work Plumbing', revenue: 76556 },
  { type: 'Service HVAC', revenue: 79456 },
  { type: 'Bid Work HVAC', revenue: 130205 },
  { type: 'Service Plumbing', revenue: 175030 },
];

// Store data in a global object (window object in a browser environment)
window.dashboardData = {
  revenueByLocationData,
  revenueByJobTypeData
};
