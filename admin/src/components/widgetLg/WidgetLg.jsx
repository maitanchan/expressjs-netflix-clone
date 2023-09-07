import "./widgetLg.css";

export default function WidgetLg() {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  }

  return (

    <div className="widgetLg">

      <h3 className="widgetLgTitle">Giao dịch gần đây</h3>

      <table className="widgetLgTable">

        <tbody>

        <tr className="widgetLgTr">
          <th className="widgetLgTh">Người dùng</th>
          <th className="widgetLgTh">Thời gian</th>
          <th className="widgetLgTh">Dịch vụ</th>
          <th className="widgetLgTh">Tình trạng</th>
        </tr>

        <tr className="widgetLgTr">

          <td className="widgetLgUser">

            <img
              src="/img/noavatar.jpg"
              alt=""
              className="widgetLgImg"
            />

            <span className="widgetLgName">...</span>

          </td>

          <td className="widgetLgDate">...</td>

          <td className="widgetLgAmount">...</td>

          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>

        </tr>
        </tbody>
      </table>
    </div>
  );
}
