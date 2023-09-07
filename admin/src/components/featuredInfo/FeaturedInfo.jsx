import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {

  return (

    <div className="featured">

      <div className="featuredItem">

        <span className="featuredTitle">...</span>

        <div className="featuredMoneyContainer">

          <span className="featuredMoney">...</span>

          <span className="featuredMoneyRate">
          ... <ArrowDownward  className="featuredIcon negative"/>
          </span>
          
        </div>

        <span className="featuredSub">...</span>

      </div>

      <div className="featuredItem">

        <span className="featuredTitle">...</span>

        <div className="featuredMoneyContainer">

          <span className="featuredMoney">...</span>

          <span className="featuredMoneyRate">
          ...<ArrowDownward className="featuredIcon negative"/>
          </span>

        </div>

        <span className="featuredSub">...</span>

      </div>

      <div className="featuredItem">

        <span className="featuredTitle">...</span>

        <div className="featuredMoneyContainer">

          <span className="featuredMoney">...</span>

          <span className="featuredMoneyRate">
          ... <ArrowUpward className="featuredIcon"/>
          </span>

        </div>

        <span className="featuredSub">...</span>

      </div>

    </div>
    
  );
}
