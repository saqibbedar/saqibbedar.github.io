import { CertificateCard } from "@/components/ui";

const CertificateResults = ({ certificates }) => {
    return (
      <div className="posts">
        {
          certificates.map((certificate) => (
            <CertificateCard
              key={certificate._id}
              image={`src${certificate.image}`}
              title={certificate.title}
              description={certificate.description}
              providerName={certificate.providerName}
              providerLogo={`${certificate.providerLogo}`}
              credentialUrl={certificate.credentialUrl}
            />
          ))
        }
      </div>
    )
  }
  
  export default CertificateResults;
  