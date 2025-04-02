
import React from 'react';

const GradientBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 animate-gradient"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiMyMjIiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iLjUiIGQ9Ik0zMCAzMGg2MHY2MEgzMHoiLz48cGF0aCBzdHJva2U9IiMyMjIiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iLjUiIGQ9Ik0wIDYwaDYwdjYwSDB6Ii8+PHBhdGggc3Ryb2tlPSIjMjIyIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9Ii41IiBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
    </div>
  );
};

export default GradientBackground;
