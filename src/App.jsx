import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ChatApp = React.lazy(() => import("chatApp/ChatApp")); // Lazy load ChatApp
const EmailApp = React.lazy(() => import("emailApp/EmailApp"));

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-300 shadow-md p-4">
        <h1 className="text-xl font-semibold mb-4 text-gray-700">
  <Link to="/" className="hover:underline">📌 Micro Frontend App</Link>
</h1>

          <nav className="space-y-2">
            <Link to="/chat" className="block p-2 rounded-lg hover:bg-gray-200">
              💬 Chat App
            </Link>
            <Link
              to="/email"
              className="block p-2 rounded-lg hover:bg-gray-200"
            >
              📧 Email App
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="p-4 flex-1 overflow-auto">
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route
                path="/chat"
                element={
                  <div className="h-full">
                    <ChatApp />
                  </div>
                }
              />
              <Route
                path="/email"
                element={
                  <div className="h-full">
                    <EmailApp />
                  </div>
                }
              />
              <Route
                path="*"
                element={<p className="text-2xl fo-bold">🏠 Select an app from the sidebar.</p>}
              />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
