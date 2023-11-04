import Header from '../components/Header/Header';
import PastTripList from '../components/PastTripList/PastTripList';

export default function HomePage({
  onHandleNewNote,
  notes,
  onDeleteNote,
  history,
  savePicture,
  onViewPort,
  onEditNotes,
}) {
  return (
    <>
      <Header />
      <PastTripList
        notes={notes}
        onHandleNewNote={onHandleNewNote}
        onDelete={onDeleteNote}
        history={history}
        savePicture={savePicture}
        onViewPort={onViewPort}
        onEditNotes={onEditNotes}
      />
    </>
  );
}
