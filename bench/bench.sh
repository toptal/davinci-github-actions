#!/bin/bash

# Function to run a script multiple times and measure performance
run_benchmark() {
    script_name=$1
    runs=$2

    # Check if script exists and is executable
    if [ ! -x "$script_name" ]; then
        echo "Error: $script_name not found or not executable"
        exit 1
    fi

    total_time=0
    total_cpu=0
    max_memory=0

    echo "Running $script_name $runs times..."

    for ((i=1; i<=$runs; i++)); do
        # Backup yarn.lock file before running the script
        cp yarn.lock yarn.lock.backup

        # Use time command to get execution statistics
        # Redirect script output to /dev/null to keep benchmark output clean
        stats=$( { /usr/bin/time -f "%e,%S,%U,%M" ./"$script_name" > /dev/null; } 2>&1 )

        # cleanup
        mv yarn.lock.backup yarn.lock
        rm -f yarn.lock.toptal yarn.lock.temp || true

        # Parse statistics
        IFS=',' read -r real_time sys_time user_time memory <<< "$stats"

        # Calculate CPU time (system + user time)
        cpu_time=$(echo "$sys_time + $user_time" | bc)

        # Update totals
        total_time=$(echo "$total_time + $real_time" | bc)
        total_cpu=$(echo "$total_cpu + $cpu_time" | bc)

        # Update max memory if current usage is higher
        if (( $(echo "$memory > $max_memory" | bc -l) )); then
            max_memory=$memory
        fi

        echo -ne "\rProgress: $i/$runs"
    done
    echo # New line after progress

    # Calculate averages
    avg_time=$(echo "scale=3; $total_time / $runs" | bc)
    avg_cpu=$(echo "scale=3; $total_cpu / $runs" | bc)

    echo "Results for $script_name:"
    echo "  Average real time: ${avg_time}s"
    echo "  Average CPU time: ${avg_cpu}s"
    echo "  Peak memory: ${max_memory}KB"
    echo "------------------------"
}

# Number of times to run each script
runs=5

echo "Performance Comparison"
echo "========================"

# Run benchmarks for both scripts
run_benchmark "new.sh" $runs
run_benchmark "old.sh" $runs
