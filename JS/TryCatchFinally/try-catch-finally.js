try {
    // Code that might throw an error
    let num = 10;
    let result = num / 0;  
    if (!isFinite(result)) {
        throw new Error("Division by zero is not allowed!");
    }
    console.log("Result:", result);
} catch (error) {
    console.log("Error caught:", error.message);
} finally {  
    console.log("Execution finished.");
}
