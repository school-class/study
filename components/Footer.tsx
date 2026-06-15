export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Study Platform. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <span className="text-gray-400">無料で誰でも学べる学習サイト</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
