// components/ThermalPrinter.js
import { useEffect } from "react";

const ThermalPrinter = () => {
  useEffect(() => {
    const connectToPrinter = async () => {
      try {
        // Request USB access
        const device = await navigator.usb.requestDevice({
          filters: [{ vendorId: 0x1234 }], // Replace with your printer's vendorId
        });

        await device.open(); // Open the device
        await device.selectConfiguration(1); // Select the first configuration
        await device.claimInterface(0); // Claim the interface

        // Send ESC/POS commands to the printer
        const encoder = new TextEncoder();
        const command = encoder.encode(
          "Hello, thermal printer!\n",
          "fcodes test print\n"
        );

        await device.transferOut(1, command); // Replace with your interface number

        console.log("Printed successfully");
      } catch (error) {
        console.error("Failed to connect to printer:", error);
      }
    };

    connectToPrinter();
  }, []);

  return <button onClick={connectToPrinter}>Print Receipt</button>;
};

export default ThermalPrinter;
