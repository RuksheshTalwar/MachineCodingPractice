import Profile from "./Profile";
import Settings from "./Settings";
import Interests from "./Interests";

export default TabForm = () => {
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  return (
    <div>
      <div className="heading-container">
        {tabs.map((t) => {
          <div className="heading"> t.name </div>;
        })}
      </div>
    </div>
  );
};
