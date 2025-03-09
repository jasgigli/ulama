import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/page";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <NavigationBar />
      <main className="flex-grow">
        <Home />
        {/* <OrganizationMembers /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
