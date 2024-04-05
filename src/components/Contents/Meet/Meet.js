import styles from "./meet.module.css";
import {Table} from 'react-bootstrap'




function Meet() {
  return (
    <div id="schedule">
      <MeetTable />
      <RatesTable />
    </div>
  )
}

export default Meet;


const MeetTable = () => {

    const users = [
        { day: 'Monday', from: '12 pm', until: '12 am' },
        { day: 'Tuesday', from: '12 pm', until: '4 pm' },
        { day: 'Wednesday', from: '-', until: '-' },
        { day: 'Thursday', from: '12 pm', until: '12 am' },
        { day: 'Friday', from: '12 pm', until: '5 pm' },
        { day: 'Saturday', from: '3 pm', until: '12 am' },
        { day: 'Sunday', from: '12 pm', until: '4 pm' },
      ]

  return (
      <div className={styles.meet}>
        <div className={styles.whenmeet}>When can we Meet?</div>
      <Table className={styles.table}>
        <tbody>
        <tr>
          <td className={styles.tabletd}>WEEKDAY</td>
          <td className={styles.tabletd}>FROM</td>
          <td className={styles.tabletd}>UNTIL</td>
        </tr>
        {
          users.map((item,i)=>
          <tr key={i}>
          <td>{item.day}</td>
          <td>{item.from}</td>
        <td>{item.until}</td>
        </tr>
          )
        }
        </tbody>
      </Table>
      </div>
  );
};




const RatesTable = () => {

  const users = [
      { day: '30 minutes', from: '$ 450	', until: 'GFE' },
      { day: '1 Hour	', from: '$ 700	', until: 'Naughty GFE' },
      { day: '2 Hour	', from: '$ 1400	', until: 'Naughty GFE' },
      { day: '3 Hour', from: '$ 2100	', until: 'Naughty GFE' },
      { day: '4 Hour', from: '$ 2700	', until: 'Naughty GFE' },
      { day: 'Dinner Date	', from: '$ 2000	', until: '2 hours social & 2 hours playtime' },
      { day: 'Overnight', from: '$ 5500	', until: '12 hours (must include 6 hours or uninterrupted sleep)' },
    ]

return (
    <div className={styles.lastmeet}>
      <div className={styles.whenmeet}>Rates</div>
    <Table className={styles.table}>
      <tbody>
      {/* <tr>
      <td className={styles.tabletd}>WEEKDAY</td>
          <td className={styles.tabletd}>FROM</td>
          <td className={styles.tabletd}>UNTIL</td>
      </tr> */}
      {
        users.map((item,i)=>
        <tr key={i}>
        <td>{item.day}</td>
        <td>{item.from}</td>
      <td>{item.until}</td>
      </tr>
        )
      }
      </tbody>
    </Table>
    </div>
);
};
