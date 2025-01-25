import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Home, User, Train, Wifi, Settings, LogIn, UserPlus } from 'lucide-react';

// Home Page with Sign-Up
const HomePage = ({ onSignUp }) => {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({
      name,
      email,
      userType,
      role: userType === 'host' ? 'Host' : 'Regular User'
    });
  };

  return (
    <div className="home-page p-6 max-w-4xl mx-auto flex">
      {/* Left Section - App Introduction */}
      <div className="w-1/2 pr-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to RestEasy</h1>
        <p className="text-gray-600 mb-4">
          Discover convenient restroom and facility bookings across metro stations and public spaces.
        </p>
        <div className="features">
          <h2 className="text-xl font-semibold mb-2">What You Can Do:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Book restrooms at various locations</li>
            <li>Rent metro station facilities</li>
            <li>Earn money by hosting your restroom</li>
            <li>Manage bookings with e-wallet</li>
          </ul>
        </div>
      </div>

      {/* Right Section - Sign-Up Form */}
      <div className="w-1/2 border p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2">Select Interface</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="userType" 
                  value="user"
                  checked={userType === 'user'}
                  onChange={() => setUserType('user')}
                  className="mr-2" 
                  required
                />
                User Interface
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="userType" 
                  value="host"
                  checked={userType === 'host'}
                  onChange={() => setUserType('host')}
                  className="mr-2" 
                />
                Host Interface
              </label>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={!userType || !name || !email || !password}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

// Login Component
const LoginPage = ({ onLogin, switchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login (in real app, this would be an API call)
    onLogin({
      email,
      name: 'John Doe',
      userType: email.includes('host') ? 'host' : 'user'
    });
  };

  return (
    <div className="login-page p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-6 text-center flex items-center justify-center">
        <LogIn className="mr-2" /> Login to RestEasy
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <button 
            type="button" 
            onClick={switchToSignUp} 
            className="text-blue-500 hover:underline flex items-center justify-center"
          >
            <UserPlus className="mr-2" /> Create New Account
          </button>
        </div>
      </form>
    </div>
  );
};

// Sign-Up Component
const SignUpPage = ({ onSignUp, switchToLogin }) => {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({
      name,
      email,
      userType,
      role: userType === 'host' ? 'Host' : 'Regular User'
    });
  };

  return (
    <div className="signup-page p-6 max-w-4xl mx-auto flex">
      {/* Left Section - App Introduction */}
      <div className="w-1/2 pr-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to RestEasy</h1>
        <p className="text-gray-600 mb-4">
          Discover convenient restroom and facility bookings across metro stations and public spaces.
        </p>
        <div className="features">
          <h2 className="text-xl font-semibold mb-2">What You Can Do:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Book restrooms at various locations</li>
            <li>Rent metro station facilities</li>
            <li>Earn money by hosting your restroom</li>
            <li>Manage bookings with e-wallet</li>
          </ul>
        </div>
      </div>

      {/* Right Section - Sign-Up Form */}
      <div className="w-1/2 border p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2">Select Interface</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="userType" 
                  value="user"
                  checked={userType === 'user'}
                  onChange={() => setUserType('user')}
                  className="mr-2" 
                  required
                />
                User Interface
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="userType" 
                  value="host"
                  checked={userType === 'host'}
                  onChange={() => setUserType('host')}
                  className="mr-2" 
                />
                Host Interface
              </label>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={!userType || !name || !email || !password}
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            <button 
              type="button" 
              onClick={switchToLogin} 
              className="text-blue-500 hover:underline"
            >
              Already have an account? Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Last User Details Component
const LastUserDetails = ({ lastUser }) => {
  if (!lastUser) return null;

  return (
    <div className="last-user-details bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <User className="mr-3 text-blue-600" />
        <div>
          <h4 className="font-bold text-lg">{lastUser.name}</h4>
          <p className="text-gray-600">{lastUser.email}</p>
          <p className="text-sm text-gray-500">Last Login: {lastUser.lastLogin}</p>
        </div>
      </div>
    </div>
  );
};

// Toilet Finder Page
const ToiletFinderPage = () => {
  const [toilets, setToilets] = useState([
    { id: 1, name: 'Central Park Restroom', lat: -34, lng: 151, price: 2 },
    { id: 2, name: 'City Mall Restroom', lat: -33.8, lng: 151.2, price: 1 }
  ]);

  return (
    <div className="toilet-finder p-4">
      <h2 className="text-2xl mb-4">Find Restrooms Nearby</h2>
      <div className="toilet-list grid grid-cols-1 md:grid-cols-2 gap-4">
        {toilets.map(toilet => (
          <div 
            key={toilet.id} 
            className="border p-4 rounded shadow-md"
          >
            <h3 className="font-bold">{toilet.name}</h3>
            <p>Price: ${toilet.price}</p>
            <button className="mt-2 bg-blue-500 text-white p-2 rounded">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Host Dashboard
const HostDashboard = () => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Home Restroom', earnings: 150, bookings: 25 },
    { id: 2, name: 'Office Restroom', earnings: 230, bookings: 40 }
  ]);

  return (
    <div className="host-dashboard p-4">
      <h2 className="text-2xl mb-4">Host Dashboard</h2>
      <div className="properties grid grid-cols-1 md:grid-cols-2 gap-4">
        {properties.map(property => (
          <div 
            key={property.id} 
            className="border p-4 rounded shadow-md"
          >
            <h3 className="font-bold">{property.name}</h3>
            <p>Total Earnings: ${property.earnings}</p>
            <p>Total Bookings: {property.bookings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Booking Page
const BookingPage = () => {
  const [selectedToilet, setSelectedToilet] = useState(null);
  const [bookingTime, setBookingTime] = useState('');

  const availableToilets = [
    { id: 1, name: 'Central Park Restroom' },
    { id: 2, name: 'City Mall Restroom' }
  ];

  return (
    <div className="booking-page p-4">
      <h2 className="text-2xl mb-4">Book a Restroom</h2>
      <div className="booking-form">
        <select 
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setSelectedToilet(e.target.value)}
        >
          <option value="">Select a Restroom</option>
          {availableToilets.map(toilet => (
            <option key={toilet.id} value={toilet.id}>
              {toilet.name}
            </option>
          ))}
        </select>
        
        <input 
          type="datetime-local"
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setBookingTime(e.target.value)}
        />
        
        <button 
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={!selectedToilet || !bookingTime}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

// E-Wallet Page
const EWalletPage = () => {
  const [balance, setBalance] = useState(500);
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Booking', amount: -20, date: '2024-01-15' },
    { id: 2, type: 'Host Earnings', amount: 50, date: '2024-01-20' }
  ]);

  return (
    <div className="e-wallet p-4">
      <h2 className="text-2xl mb-4">E-Wallet</h2>
      <div className="balance mb-4">
        <h3 className="text-xl">Balance: ${balance}</h3>
      </div>
      <div className="transactions">
        <h3 className="text-lg mb-2">Recent Transactions</h3>
        {transactions.map(transaction => (
          <div 
            key={transaction.id} 
            className={`p-2 border-b ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}
          >
            {transaction.type} - ${transaction.amount} on {transaction.date}
          </div>
        ))}
      </div>
    </div>
  );
};

// Metro Railway Lease Component
const MetroRailwayLease = () => {
  const [facilities, setFacilities] = useState([
    { 
      id: 1, 
      stationName: 'Central Station', 
      availableFacilities: ['Restroom', 'Changing Room', 'Locker', 'WiFi'],
      pricing: {
        toilet: 5,
        changingRoom: 10,
        locker: 3,
        wifi: 2
      },
      wifiDetails: {
        speed: '50 Mbps',
        timeLimit: '2 hours',
        concurrentUsers: 50
      }
    },
    { 
      id: 2, 
      stationName: 'Downtown Junction', 
      availableFacilities: ['Restroom', 'Locker', 'WiFi'],
      pricing: {
        toilet: 4,
        locker: 3,
        wifi: 1
      },
      wifiDetails: {
        speed: '30 Mbps',
        timeLimit: '1 hour',
        concurrentUsers: 30
      }
    }
  ]);

  const [selectedFacility, setSelectedFacility] = useState(null);

  const handleBookFacility = (facility, type) => {
    setSelectedFacility({
      station: facility.stationName,
      type: type,
      price: facility.pricing[type],
      ...(type === 'wifi' && { wifiDetails: facility.wifiDetails })
    });
  };

  return (
    <div className="metro-railway-lease p-4">
      <h2 className="text-2xl mb-4 flex items-center">
        <Train className="mr-2" /> Metro Railway Facilities
      </h2>
      <div className="facilities grid md:grid-cols-2 gap-4">
        {facilities.map(facility => (
          <div 
            key={facility.id} 
            className="border p-4 rounded shadow-md"
          >
            <h3 className="font-bold text-lg">{facility.stationName}</h3>
            <div className="available-facilities">
              {facility.availableFacilities.map(type => (
                <div 
                  key={type} 
                  className="facility-item mb-2 flex justify-between items-center"
                >
                  <span className="flex items-center">
                    {type === 'WiFi' && <Wifi className="mr-2 text-blue-500" />}
                    {type}
                  </span>
                  <button 
                    onClick={() => handleBookFacility(facility, type.toLowerCase())}
                    className="bg-blue-500 text-white p-2 rounded text-sm"
                  >
                    Book (${facility.pricing[type.toLowerCase()]})
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedFacility && (
        <div className="booking-confirmation mt-4 p-4 bg-green-100 rounded">
          <h4 className="font-bold">Booking Confirmed</h4>
          <p>Station: {selectedFacility.station}</p>
          <p>Facility: {selectedFacility.type}</p>
          <p>Price: ${selectedFacility.price}</p>
          {selectedFacility.wifiDetails && (
            <div className="wifi-details mt-2">
              <h5 className="font-semibold flex items-center">
                <Wifi className="mr-2 text-blue-600" /> WiFi Details
              </h5>
              <p>Speed: {selectedFacility.wifiDetails.speed}</p>
              <p>Time Limit: {selectedFacility.wifiDetails.timeLimit}</p>
              <p>Concurrent Users: {selectedFacility.wifiDetails.concurrentUsers}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Navigation Component
const Navigation = ({ setCurrentPage, lastUser }) => {
  const navItems = [
    { icon: <Home />, label: 'Home', page: 'home' },
    { label: 'Find Restroom', page: 'findToilet' },
    { label: 'Host Dashboard', page: 'hostDashboard' },
    { label: 'Booking', page: 'booking' },
    { label: 'E-Wallet', page: 'wallet' },
    { label: 'Metro Lease', page: 'metroLease' }
  ];

  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <div className="logo text-xl font-bold">RestEasy</div>
      <div className="nav-links flex items-center">
        {navItems.map((item) => (
          <button 
            key={item.page}
            onClick={() => setCurrentPage(item.page)}
            className="mr-4 hover:bg-blue-700 p-2 rounded"
          >
            {item.icon || item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

function App() {
  const [authMode, setAuthMode] = useState('signup'); // 'signup', 'login'
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleSignUp = (userData) => {
    setUser(userData);
    setCurrentPage(userData.userType === 'host' ? 'hostDashboard' : 'findToilet');
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage(userData.userType === 'host' ? 'hostDashboard' : 'findToilet');
  };

  const renderAuthPage = () => {
    return authMode === 'signup' 
      ? <SignUpPage 
          onSignUp={handleSignUp} 
          switchToLogin={() => setAuthMode('login')} 
        />
      : <LoginPage 
          onLogin={handleLogin} 
          switchToSignUp={() => setAuthMode('signup')} 
        />;
  };

  const renderPage = () => {
    if (!user) {
      return renderAuthPage();
    }

    switch(currentPage) {
      case 'home': 
        return renderAuthPage();
      case 'findToilet': 
        return <ToiletFinderPage />;
      case 'hostDashboard': 
        return <HostDashboard />;
      case 'booking': 
        return <BookingPage />;
      case 'wallet': 
        return <EWalletPage />;
      case 'metroLease': 
        return <MetroRailwayLease />;
      default: 
        return <ToiletFinderPage />;
    }
  };

  const renderNavigation = () => {
    if (!user) return null;

    return (
      <Navigation 
        setCurrentPage={setCurrentPage} 
        lastUser={user} 
        userType={user.userType}
      />
    );
  };

  return (
    <div className="app-container">
      {renderNavigation()}
      <main className="content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App
