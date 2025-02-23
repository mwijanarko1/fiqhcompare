const references = [
  {
    school: 'Hanafi',
    books: [
      {
        title: 'Al-Hidayah',
        author: 'Burhan al-Din al-Marghinani',
        description: 'A comprehensive manual of Islamic law according to the Hanafi school.',
        link: '#'
      },
      {
        title: 'Badai al-Sanai',
        author: 'Ala al-Din al-Kasani',
        description: 'A detailed explanation of Islamic jurisprudence in the Hanafi tradition.',
        link: '#'
      }
    ]
  },
  {
    school: 'Maliki',
    books: [
      {
        title: 'Al-Risala',
        author: 'Ibn Abi Zayd al-Qayrawani',
        description: 'A foundational text in Maliki fiqh, covering various aspects of Islamic law.',
        link: '#'
      },
      {
        title: 'Al-Muwatta',
        author: 'Imam Malik',
        description: 'The earliest surviving book of Islamic law, compiled by the founder of the Maliki school.',
        link: '#'
      }
    ]
  },
  {
    school: 'Shafii',
    books: [
      {
        title: 'Al-Umm',
        author: 'Imam al-Shafii',
        description: 'The magnum opus of Imam al-Shafii, detailing his legal methodology and rulings.',
        link: '#'
      },
      {
        title: 'Minhaj al-Talibin',
        author: 'Imam al-Nawawi',
        description: 'A comprehensive guide to Shafii fiqh, widely used in traditional Islamic education.',
        link: '#'
      }
    ]
  },
  {
    school: 'Hanbali',
    books: [
      {
        title: 'Al-Mughni',
        author: 'Ibn Qudamah',
        description: 'One of the most comprehensive books on Islamic jurisprudence in the Hanbali school.',
        link: '#'
      },
      {
        title: 'Al-Insaf',
        author: 'Al-Mardawi',
        description: 'A detailed comparison of opinions within the Hanbali school.',
        link: '#'
      }
    ]
  }
];

export default function ReferencesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">References</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our rulings are sourced from these authoritative classical texts of Islamic jurisprudence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {references.map((school) => (
          <div key={school.school} className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
              {school.school} School
            </h2>
            <div className="space-y-6">
              {school.books.map((book) => (
                <div key={book.title} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-emerald-600 mb-2">
                    by {book.author}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {book.description}
                  </p>
                  {book.link !== '#' && (
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      View Source →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50 rounded-xl p-6 mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Note on References
        </h2>
        <p className="text-gray-600">
          The rulings presented on this website are derived from these classical texts and their 
          respected commentaries. While we strive for accuracy, we encourage users to verify rulings 
          with qualified scholars and the original texts when possible.
        </p>
      </div>
    </div>
  );
} 