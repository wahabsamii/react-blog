export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Abdul Wahab's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Abdul Wahab's Blog! This blog was created as a personal project to
              share my thoughts, ideas, and knowledge with the world. I'm passionate
              about technology, development, and continuous learning.
            </p>

            <p>
              Here, you'll find weekly articles and tutorials on web development,
              software engineering, and programming best practices. I'm always exploring
              new technologies, so make sure to check back often for fresh content!
            </p>

            <p>
              Feel free to leave comments, share your ideas, and engage with
              other readers. You can like and reply to comments as well.
              Let's build a vibrant community of learners and creators together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
