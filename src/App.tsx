import React from 'react';
import { 
  Package, Truck, Package2, BarChart3, 
  Bell, Search, Menu, UserCircle 
} from 'lucide-react';
import OrdersTable from './components/OrdersTable';
import DeliveryMap from './components/DeliveryMap';
import InventoryStatus from './components/InventoryStatus';
import MetricsCard from './components/MetricsCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LogisticsPro</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <UserCircle className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricsCard
            title="Active Orders"
            value="247"
            change="+12.5%"
            icon={<Package className="h-6 w-6" />}
            trend="up"
          />
          <MetricsCard
            title="In Transit"
            value="89"
            change="+5.2%"
            icon={<Truck className="h-6 w-6" />}
            trend="up"
          />
          <MetricsCard
            title="Low Stock Items"
            value="24"
            change="-3.1%"
            icon={<Package2 className="h-6 w-6" />}
            trend="down"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <OrdersTable />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Delivery Tracking</h2>
            <DeliveryMap />
          </div>
        </div>

        {/* Inventory Status */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Inventory Status</h2>
          <InventoryStatus />
        </div>
      </main>
    </div>
  );
}

export default App;