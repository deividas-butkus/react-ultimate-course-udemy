import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateEditCabinForm from "../features/cabins/CreateEditCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>

      <Button onClick={() => setShowForm((show) => !show)}>
        Add new cabin
      </Button>
      {showForm && <CreateEditCabinForm setShowForm={setShowForm} />}
    </>
  );
}

export default Cabins;
