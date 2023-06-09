import { Event } from "@/@types/Event";
export default function EventCard({ event }: { event: Event }) {
	return (
		<div className="w-[32rem] h-[9rem] flex border-2 border-white">
			<div className="bg-white w-[4rem]">{/* Image */}</div>
			<div className=" p-4 w-full">
				<h2 className="font-bold text-2xl">{event.title}</h2>
			</div>
		</div>
	);
}
