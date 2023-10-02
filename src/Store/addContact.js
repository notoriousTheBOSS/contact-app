import { create } from "zustand";

const useContact = create((set) => ({
    contacts: [],
    addContact: (contact) =>
        set((state) => ({ contacts: [...state.contacts, contact] })),
}));

export default useContact;
