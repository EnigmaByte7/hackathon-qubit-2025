import { create } from "zustand";

const useTrainStore = create((set) => ({
  formData: {
    from: "",
    to: "",
    date: "",
    mode: "",
  },
  setFormData: (data) => set({ formData: data }),
}));

export default useTrainStore;
