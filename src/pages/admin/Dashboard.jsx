import { IoIosPeople } from 'react-icons/io';
import { DashboardItem } from '../../components/cards/DashboardItem';
import { Grid } from '../../components/grid/Grid';
import { HeaderPage } from '../../components/layout/HeaderPage';


export const Dashboard = () => {
  return (
    <div className="mx-2">
      <HeaderPage title='Dashboard' pref='Inicio' />

      <section className="mx-5">
        <Grid sm={2} md={2} lg={3} xl={4}>
          <DashboardItem
            title="Usuarios Activos"
            number="150"
            Icon={IoIosPeople}
          />
          <DashboardItem
            title="Usuarios Activos"
            number="150"
            Icon={IoIosPeople}
          />
          <DashboardItem
            title="Usuarios Activos"
            number="150"
            Icon={IoIosPeople}
          />
          <DashboardItem
            title="Usuarios Activos"
            number="150"
            Icon={IoIosPeople}
          />
          <DashboardItem
            title="Usuarios Activos"
            number="150"
            Icon={IoIosPeople}
          />
        </Grid>
      </section>
    </div>
  );
};
