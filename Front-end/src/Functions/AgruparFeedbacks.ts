import type { FeedbackType } from "../Types/Feedback";

export default function agruparFeedbacks(feedbacks: FeedbackType[]) {
    const result = [];
    for (let i = 0; i < feedbacks.length; i += 3) {
        result.push(feedbacks.slice(i, i + 3));
    }
    return result;
}