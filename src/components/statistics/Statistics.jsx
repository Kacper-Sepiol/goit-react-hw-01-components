import statisticCss from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={statisticCss.statistic}>
      <h2 className={statisticCss.title}>{title}</h2>

      <ul className={statisticCss.statList}>
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className={statisticCss.label}>{stat.label}:</span>
            <span className={statisticCss.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
