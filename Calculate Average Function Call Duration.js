class ChromeTraceAnalyzer {
    traces = [];

    constructor() {
        // Initialize with an empty array of traces
    }

    // Add a new trace to the analyzer
    addTrace(trace) {
        this.traces.push(trace);
    }

    // Calculate average duration of function calls by name
    getAverageDurationMs(name) {
        if (this.traces.length === 0) {
            throw new Error('No traces loaded.');
        }

        let totalDuration = 0;
        let count = 0;

        this.traces.forEach(trace => {
            const result = trace.nodes.find(node => node.callFrame.functionName === name);
            if (result) {
                totalDuration += result.duration;
                count++;
            }
        });

        if (count === 0) {
            throw new Error(`Function '${name}' not found in traces.`);
        }

        return totalDuration / count;
    }
}

// Example usage:
const analyzer = new ChromeTraceAnalyzer();

// Assuming traces are added to analyzer using addTrace method...

try {
    const averageDuration = analyzer.getAverageDurationMs('runApp');
    console.log(`Average duration of 'runApp' function: ${averageDuration}ms`);
} catch (error) {
    console.error(error.message);
}
