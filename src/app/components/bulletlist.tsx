import React from 'react'; // This line is necessary for JSX
interface BulletListProps {
    items: { [key: string]: string };
  }
  
  const BulletList: React.FC<BulletListProps> = ({ items }) => {
    return (
      <ul className="list-disc pl-5 space-y-2 mt-6">
        {Object.entries(items).map(([key, value]) => (
          <li key={key}>
            <strong>{key.replace(/_/g, ' ')}:</strong> {value}
          </li>
        ))}
      </ul>
    );
  };
  
  export default BulletList;
  