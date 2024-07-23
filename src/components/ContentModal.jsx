import {Modal} from "@mantine/core";
import PropTypes from "prop-types";

const ContentModal = ({title="default",current,status}) => {
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

        </>
    );
}
ContentModal.PropTypes = {
    title: PropTypes.string,
    current: PropTypes.bool,
    status: PropTypes.bool,
}
export default ContentModal;