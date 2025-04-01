export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Nilesh Jain / Arnaiya</h3>
            <p className="text-sm text-gray-600">Researcher • Founder • Educator</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600 mb-2">Stay Connected</p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/nilesharnaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/in/nilesharnaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/NotSoHuman.AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nilesh Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

