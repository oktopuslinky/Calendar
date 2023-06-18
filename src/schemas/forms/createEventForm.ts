import { z } from 'zod';
import { EventModel } from '../index';

export const CreateEventForm = EventModel.omit({
	startTime: true,
	endTime: true,
	id: true,
	creatorId: true,
	allDay: true,
	pending: true,
	approved: true,
	maxAttendence: true,
	title: true,
}).extend({
	title: z.string().min(3).max(100),
	startDate: z.string(),
	endDate: z.string(),
	startTime: z.string(),
	endTime: z.string(),
	maxAttendence: z.number().int().min(1).max(1000),
});

export interface CreateEventFormType extends z.infer<typeof CreateEventForm> {}