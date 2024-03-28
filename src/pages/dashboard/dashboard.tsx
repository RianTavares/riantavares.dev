import Clock from "@/components/Clock";
import styles from "./dashboard.module.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })

const Dashboard = () => {
    return (
      <main className={montserrat.className}>
        <div className={styles.clocksContainer}>
          <Clock timeZone="America/Sao_Paulo" locationName="Rio de Janeiro, Brasil" main/>
          <div className={styles.secondaryClocks}>
            <Clock timeZone="America/Los_Angeles" locationName="Idaho, USA" />
            <Clock timeZone="Europe/Brussels" locationName="Brussels, BE"/>
          </div>
        </div>
      </main>
    );
};

export default Dashboard;


