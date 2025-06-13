import { useState } from "react";
import Button from "../../ui/Button";
import CreateEditCabinForm from "../../features/cabins/CreateEditCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal>
          <CreateEditCabinForm />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
