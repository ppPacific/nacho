import {Modal} from "@mantine/core";


const EditorModal = ({title="default",current,status}) => {
  //const [opened, { open, close }] = useDisclosure(false);

  return (
      <>
        <Modal opened={current} onClose={status} title={title} centered>
          <div>
            <h1>Nacho</h1>
            <h2>Nacho</h2>
            <h3>Nacho</h3>
            <h4>Nacho</h4>
            <p>nacho</p>
          </div>
        </Modal>

        {/*<Button onClick={open}>Open centered Modal</Button>*/}
      </>
  );
}

export default EditorModal;