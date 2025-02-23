export interface ChapterContent {
  title: string;
  content: string[];
}

export interface TopicData {
  title: string;
  chapters: ChapterContent[];
}

export const topicData: Record<string, TopicData> = {
  purification: {
    title: "The Book of Purification (Hanbali Madhhab)",
    chapters: [
      // ... existing chapters ...
    ]
  },
  prayer: {
    title: "The Book of Prayer (Hanbali Madhhab)",
    chapters: [
      // ... existing chapters ...
    ]
  },
  zakat: {
    title: "The Book of Zakat (Hanbali Madhhab)",
    chapters: [
      // ... existing chapters ...
    ]
  },
  fasting: {
    title: "The Book of Fasting (Hanbali Madhhab)",
    chapters: [
      // ... existing chapters ...
    ]
  },
  hajj: {
    title: "The Book of Hajj (Hanbali Madhhab)",
    chapters: [
      // ... existing chapters ...
    ]
  }
}; 