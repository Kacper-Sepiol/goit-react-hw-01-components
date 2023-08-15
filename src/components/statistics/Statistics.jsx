import data from '../data.json';

const Statistics = ({ title, stats, color }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <div>
            <li className="item" key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
