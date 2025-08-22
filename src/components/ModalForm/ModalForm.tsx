import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ModalFormProps } from "./ModalForm.types";

export function ModalForm<T extends Record<string, any>>({
  isOpen,
  onClose,
  title,
  fields,
  initialData = {},
  onSubmit,
}: ModalFormProps<T>) {
  const [formData, setFormData] = useState<Partial<T>>(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as T);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}         // fade out khi đóng
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg w-[1380px] h-[630px] p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}  // thu nhỏ + mờ khi đóng
            transition={{ duration: 0.25 }}
          >
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="mb-1 font-medium">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                      value={formData[field.name] ?? ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                  ) : field.type === "select" && field.options ? (
                    <select
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                      value={formData[field.name] ?? ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    >
                      <option value="">-- Chọn --</option>
                      {field.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                      value={formData[field.name] ?? ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Huỷ
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Lưu
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
