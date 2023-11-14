---
title: Convert wav files to mp3 files
date: "2023-10-16"
draft: false
tags:
  - seed
---

Answer from chatGPT:

## Shell script

Certainly! You can use the `ffmpeg` command-line tool to convert WAV files to
MP3 files. To do this, you can create a shell script as follows:

1. **Open a text editor**: You can use the built-in TextEdit app or any other
   text editor of your choice.

2. **Create a new shell script**: In the text editor, create a new file and add
   the following lines:

```bash
#!/bin/bash

# Check if the 'ffmpeg' command is available
if ! command -v ffmpeg &> /dev/null; then
    echo "ffmpeg is not installed. Please install it before using this script."
    exit 1
fi

# Input directory containing WAV files
input_dir="/path/to/your/input/directory"

# Output directory for MP3 files
output_dir="/path/to/your/output/directory"

# Convert WAV files to MP3
for file in "$input_dir"/*.wav; do
    if [ -e "$file" ]; then
        filename=$(basename "$file")
        filename_no_extension="${filename%.wav}"
        output_file="$output_dir/$filename_no_extension.mp3"
        ffmpeg -i "$file" -q:a 0 "$output_file"
        echo "Converted $filename to $output_file"
    fi
done
```

Replace `/path/to/your/input/directory` with the directory containing your WAV
files and `/path/to/your/output/directory` with the directory where you want to
save the MP3 files.

3. **Save the script**: Save the file with a ".sh" extension, for example,
   "convert_wav_to_mp3.sh".

4. **Make the script executable**: Open Terminal, navigate to the directory
   where you saved the script, and make it executable using the following
   command:

```bash
chmod +x convert_wav_to_mp3.sh
```

5. **Run the script**: Run the script by typing the following command in the
   Terminal:

```bash
./convert_wav_to_mp3.sh
```

The script will convert all WAV files in the specified input directory to MP3
files in the specified output directory using `ffmpeg`. Make sure you have
`ffmpeg` installed on your system before running the script.

## Typescript

Certainly, you can use TypeScript for such a task, but you'll typically need to
use external libraries or tools that are written in TypeScript or JavaScript to
work with MP3 files and metadata. You may also need to execute TypeScript using
a Node.js runtime. Here's a basic example of how you can use TypeScript and the
`node-id3` library to update the author tag and add cover art to MP3 files:

1. **Setup and Dependencies**:

   - First, make sure you have Node.js installed on your system.
   - Create a new directory for your project and navigate to it in the terminal.

2. **Initialize a Node.js project**:

   Run the following command to create a `package.json` file:

   ```bash
   npm init -y
   ```

3. **Install the necessary libraries**:

   Run the following command to install the `node-id3` library and other
   dependencies:

   ```bash
   npm install node-id3 @types/node
   ```

4. **Create a TypeScript script**:

   Create a TypeScript file (e.g., `update_mp3_metadata.ts`) in your project
   directory. Here's an example of a TypeScript script that prompts for the text
   to search for in file names, the new author name, and the path to the cover
   art image, and then updates the author and adds the cover art to MP3 files:

   ```typescript
   import * as fs from "fs"
   import * as readline from "readline"
   import * as ID3 from "node-id3"

   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
   })

   rl.question(
     'Enter the text to search for in the file names (e.g., "EV"): ',
     (targetText) => {
       rl.question("Enter the new author name: ", (newAuthor) => {
         rl.question(
           'Enter the path to the cover art image (e.g., "/path/to/cover.jpg"): ',
           (coverPath) => {
             // Directory containing your MP3 files (current directory)
             const mp3Directory = process.cwd()

             fs.readdirSync(mp3Directory).forEach((file) => {
               if (file.endsWith(".mp3") && file.includes(targetText)) {
                 const mp3File = `${mp3Directory}/${file}`
                 const outputMp3File = mp3File.replace(
                   ".mp3",
                   "_with_cover.mp3",
                 )
                 const tags = ID3.read(mp3File)

                 // Update author tag
                 tags.artist = newAuthor

                 // Add cover art
                 const coverArt = {
                   type: { id: 3, name: "front cover" },
                   description: "Cover (front)",
                   imageBuffer: fs.readFileSync(coverPath),
                 }

                 tags.image = [coverArt]

                 ID3.write(tags, outputMp3File)
                 console.log(`Cover art added and author updated for ${file}`)
               }
             })

             rl.close()
           },
         )
       })
     },
   )
   ```

5. **Compile and Run the TypeScript script**:

   Compile the TypeScript script to JavaScript using the TypeScript compiler
   (`tsc`) with the following command:

   ```bash
   tsc update_mp3_metadata.ts
   ```

   This will create a `update_mp3_metadata.js` file.

6. **Run the JavaScript script**:

   Execute the JavaScript script with Node.js:

   ```bash
   node update_mp3_metadata.js
   ```

The script will prompt you for the text to search for in file names, the new
author name, and the path to the cover art image, and then it will update both
the author tag and add the cover art to MP3 files that match the specified
criteria.
