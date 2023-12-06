import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Notify = ({ onAcceptChange, onOpenChange }) => {
  const [accept, setAccept] = useState(false);
  const [open, setOpen] = useState(false);
  const handleAccess = () => {
    setAccept(true);
    onAcceptChange(accept);
    setOpen(false);
  };
  const handleOpen = () => {
    onOpenChange(open);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div
          id="toast"
          class="fixed inset-0 flex items-center justify-center bg-edeff7">
          <div class="bg-white rounded-lg p-4 shadow-lg relative">
            <div
              onClick={() => setOpen(false)}
              class="absolute top-0 right-0 mt-2 mr-2 hover:cursor-pointer">
              <IoMdClose />
            </div>
            <p id="toast-message" class="text-gray-800 pt-5 flex items-center">
              Bạn có chắc chắn muốn xóa không?
            </p>
            <div class="flex justify-end mt-4">
              <button
                onClick={handleAccess}
                class="px-4 py-2 rounded-md bg-blue-500 text-white mr-2 hover:bg-blue-600 hover:cursor-pointer">
                Có
              </button>
              <button
                onClick={handleOpen}
                class="px-4 py-2 rounded-md bg-gray-300 text-gray-800 cursor-pointer hover:bg-gray-400 hover:cursor-pointer">
                Không
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notify;
