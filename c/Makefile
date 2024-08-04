# Define the compiler
CC = gcc

# Define the source directory and the binary directory
SRC_DIR = src
BIN_DIR = bin

# Collect all .c files in the source directory
SRCS = $(wildcard $(SRC_DIR)/*.c)

# Generate a list of executable names
EXES = $(patsubst $(SRC_DIR)/%.c, $(BIN_DIR)/%, $(SRCS))

# Default target
all: $(EXES)

# Rule to build each executable
$(BIN_DIR)/%: $(SRC_DIR)/%.c
	@mkdir -p $(BIN_DIR)
	$(CC) -o $@ $<

# Clean up build artifacts
clean:
	rm -rf $(BIN_DIR)

.PHONY: all clean
