import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Projects for 2022</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,2415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward />
          </span>
        </div>
        <span className="featuredSub">Compared to last year</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Provincial Roads</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,2415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Project Progress Report</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,2415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowUpward />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
