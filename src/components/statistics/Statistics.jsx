import statisticCss from './statistics.module.css';
import titleCss from './title.module.css';
import statListCss from './statList.module.css';
import labelCss from './label.module.css';
import percentageCss from './percentage.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={statisticCss.statistic}>
      <h2 className={titleCss.title}>{title}</h2>

      <ul className={statListCss.statList}>
        {stats.map(stat => (
          <div>
            <li className="item" key={stat.id}>
              <span className={labelCss.label}>{stat.label}:</span>
              <span className={percentageCss.percentage}>
                {stat.percentage}%
              </span>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
