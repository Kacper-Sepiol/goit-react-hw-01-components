import PropTypes from 'prop-types';
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
