import React from 'react';

const DeliveryMap: React.FC = () => {
  return (
    <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19868.687835981472!2d-74.00594368724166!3d40.71277565774664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1635959811054!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-sm">8 Deliveries in Progress</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap;