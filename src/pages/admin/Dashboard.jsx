import { IoIosPeople } from 'react-icons/io';
import { DashboardItem } from '../../components/cards/DashboardItem';
import GridTemplate from '../../components/Grid';
import { Grid } from '../../components/grid/Grid';


export const Dashboard = () => {
  return (
    <div className="mx-2">
      <div className="flex flex-row justify-between items-center my-3">
        <div className="column-1">
          <p className="m-0 text-2xl md:text-4xl">Dashboard</p>
        </div>
        <div className="column-1">
          <ol className="flex m-0">
            <a className="text-gray-400 hover:text-gray-600 pe-1">Home</a>
            <span className="text-gray-400">/</span>
            <a className="text-gray-400 hover:text-gray-600 ps-1">Dashboard</a>
          </ol>
        </div>
      </div>

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
      {/* <GridTemplate /> */}
    </div>
  );
};
