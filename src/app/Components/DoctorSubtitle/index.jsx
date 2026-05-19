import { getDoctorSubtitleLines, isLongDoctorSubtitle } from '@/app/utils/doctorSubtitle';

const DoctorSubtitle = ({ text, className = 'cs_team_subtitle' }) => {
  const lines = getDoctorSubtitleLines(text);
  if (!lines.length) return null;

  const isLong = isLongDoctorSubtitle(text);

  return (
    <p className={`${className}${isLong ? ` ${className}--long` : ''}`}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className={`${className}_line`}>
          {line}
        </span>
      ))}
    </p>
  );
};

export default DoctorSubtitle;
