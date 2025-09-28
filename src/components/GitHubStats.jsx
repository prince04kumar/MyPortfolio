import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const GitHubStats = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/prince04kumar');
        const data = await response.json();
        setGithubData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const stats = [
    {
      title: "Public Repositories",
      value: githubData?.public_repos || 0,
      icon: "📚"
    },
    {
      title: "Followers",
      value: githubData?.followers || 0,
      icon: "👥"
    },
    {
      title: "Following",
      value: githubData?.following || 0,
      icon: "👤"
    },
    {
      title: "Years on GitHub",
      value: githubData ? new Date().getFullYear() - new Date(githubData.created_at).getFullYear() : 0,
      icon: "⏳"
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Development Journey</p>
        <h2 className={styles.sectionHeadText}>GitHub Activity.</h2>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
        </div>
      ) : (
        <div className="mt-20">
          {/* GitHub Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                className="bg-tertiary p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-white text-2xl font-bold">{stat.value}</h3>
                <p className="text-secondary">{stat.title}</p>
              </motion.div>
            ))}
          </div>

          {/* GitHub Contribution Graph */}
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            className="bg-tertiary p-6 rounded-xl"
          >
            <h3 className="text-white text-xl font-bold mb-4">Contribution Graph</h3>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=prince04kumar&theme=dark&hide_border=true`}
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </motion.div>

          {/* Most Used Languages */}
          <motion.div
            variants={fadeIn("up", "spring", 0.7, 0.75)}
            className="mt-8 bg-tertiary p-6 rounded-xl"
          >
            <h3 className="text-white text-xl font-bold mb-4">Most Used Languages</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=prince04kumar&layout=compact&theme=dark&hide_border=true`}
              alt="Top Languages"
              className="w-full rounded-lg"
            />
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            variants={fadeIn("up", "spring", 0.9, 0.75)}
            className="mt-8 bg-tertiary p-6 rounded-xl"
          >
            <h3 className="text-white text-xl font-bold mb-4">GitHub Statistics</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=prince04kumar&show_icons=true&theme=dark&hide_border=true`}
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            variants={fadeIn("up", "spring", 1.1, 0.75)}
            className="mt-8 bg-tertiary p-6 rounded-xl"
          >
            <h3 className="text-white text-xl font-bold mb-4">Recent Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* You can add dynamic repo cards here using GitHub API */}
              <div className="bg-black-200 p-4 rounded-lg">
                <h4 className="text-white font-semibold">Health Record App</h4>
                <p className="text-secondary text-sm">A comprehensive MERN-stack healthcare management system</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Node.js</span>
                </div>
              </div>
              <div className="bg-black-200 p-4 rounded-lg">
                <h4 className="text-white font-semibold">WebRTC Project</h4>
                <p className="text-secondary text-sm">Real-time video calling application with screen sharing</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">JavaScript</span>
                  <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">WebRTC</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(GitHubStats, "github");